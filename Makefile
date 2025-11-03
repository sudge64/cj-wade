.PHONY: all clean

# Configuration
PANOPTS = --standalone \
          --table-of-contents \
          --css=css/style.css \
          --section-divs \
          --email-obfuscation=references \
          --include-before-body=_includes/header.html \
          --include-after-body=_includes/footer.html \
          --katex

all:
	mkdir -p ./docs
	find . -path './docs' -prune -o -name '*.md' -type f -exec \
		sh -c 'pandoc $(PANOPTS) --from=markdown --to=html \
		--output "docs/$(dirname "$$1")/$(basename "$$1" .md).html" "$$1"' _ {} \;

clean:
	rm -rf docs/*.html

# Note: Replace 'make push' with your deployment command as needed

