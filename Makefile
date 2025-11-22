.PHONY: all clean

# Configuration
PANOPTS = --standalone \
          --table-of-contents \
          --css=../css/style.css \
          --section-divs \
          --email-obfuscation=references \
          --include-before-body=_includes/header.html \
          --include-after-body=_includes/footer.html \
          --katex

# Configuration for HTML files (no TOC or KaTeX needed)
HTMLOPTS = --standalone \
           --css=../css/style.css \
           --section-divs \
           --email-obfuscation=references \
           --include-before-body=_includes/header.html \
           --include-after-body=_includes/footer.html

# Find all markdown files, excluding docs directory
MD_FILES := $(shell find . -path ./docs -prune -o -name '*.md' -type f -not -name 'README.md' -print)

# Find all HTML files in pages directory (excluding projects.html)
PAGE_FILES := $(filter-out pages/projects.html, $(wildcard pages/*.html))

# Convert markdown paths to html paths in docs directory
HTML_FILES := $(filter-out R%, $(patsubst ./%.md,docs/%.html,$(MD_FILES)))

# Convert pages HTML paths to docs/pages
PAGES_HTML := $(patsubst pages/%.html,docs/pages/%.html,$(PAGE_FILES))

all: $(HTML_FILES) $(PAGES_HTML) docs/pages/projects.html
	cp -r CNAME docs
	cp -r css docs
	cp -r images docs

# Pattern rule to build HTML from markdown
docs/%.html: %.md
	@mkdir -p $(dir $@)
	pandoc $(PANOPTS) --from=markdown --to=html --output "$@" "$<"

# Pattern rule to process HTML files from pages
docs/pages/%.html: pages/%.html
	@mkdir -p $(dir $@)
	pandoc $(HTMLOPTS) --from=html --to=html --output "$@" "$<"

# Special rule for projects page
docs/pages/projects.html: $(MD_FILES) _includes/header.html _includes/footer.html
	@mkdir -p docs/pages
	@echo "---" > /tmp/projects.md
	@echo "title: Projects" >> /tmp/projects.md
	@echo "---" >> /tmp/projects.md
	@echo "" >> /tmp/projects.md
	@echo "# Projects" >> /tmp/projects.md
	@echo "" >> /tmp/projects.md
	@find posts -name '*.md' -type f | sort -r | while read post; do \
		title=$$(grep -m1 '^title:' "$$post" | sed 's/^title: *//; s/"//g' | sed "s/'//g"); \
		url=$$(echo "$$post" | sed 's|^posts/|/posts/|; s|\.md$$|.html|'); \
		if [ -n "$$title" ]; then \
			echo "## [$$title]($$url)" >> /tmp/projects.md; \
		fi; \
	done
	pandoc $(HTMLOPTS) --from=markdown --to=html --output "$@" /tmp/projects.md
	@rm /tmp/projects.md

clean:
	rm -rf docs
