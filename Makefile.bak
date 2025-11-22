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

# Find all markdown files, excluding docs directory
MD_FILES := $(shell find . -path ./docs -prune -o -name '*.md' -type f -not -name 'README.md' -print)

# Convert markdown paths to html paths in docs directory
HTML_FILES := $(filter-out R%, $(patsubst ./%.md,docs/%.html,$(MD_FILES)))

all: $(HTML_FILES)
	cp -r CNAME docs
	cp -r css docs
	cp -r images docs
	cp -r pages docs

# Pattern rule to build HTML from markdown
docs/%.html: %.md
	@mkdir -p $(dir $@)
	pandoc $(PANOPTS) --from=markdown --to=html --output "$@" "$<"

clean:
	rm -rf docs
