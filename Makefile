.PHONY: all clean

# Configuration
PANOPTS = --standalone \
          --table-of-contents \
          --css=/css/style.css \
          --section-divs \
          --email-obfuscation=references \
          --include-before-body=_includes/header.html \
          --include-after-body=_includes/footer.html \
          --katex

# Configuration for HTML files (no TOC or KaTeX needed)
HTMLOPTS = --standalone \
           --css=/css/style.css \
           --section-divs \
           --email-obfuscation=references \
           --include-before-body=_includes/header.html \
           --include-after-body=_includes/footer.html

# Find all markdown files, excluding docs directory
MD_FILES := $(shell find . -path ./docs -prune -o -name '*.md' -type f -not -name 'README.md' -print)

# Find all HTML files in pages directory
PAGE_FILES := $(wildcard pages/*.html)

# Convert markdown paths to html paths in docs directory
HTML_FILES := $(filter-out R%, $(patsubst ./%.md,docs/%.html,$(MD_FILES)))

# Convert pages HTML paths to docs/pages
PAGES_HTML := $(patsubst pages/%.html,docs/pages/%.html,$(PAGE_FILES))

all: $(HTML_FILES) $(PAGES_HTML)
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

clean:
	rm -rf docs
