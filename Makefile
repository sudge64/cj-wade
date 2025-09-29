PANOPTS=--standalone --table-of-contents --css=css/style.css --section-divs --email-obfuscation=references --include-before-body=_includes/header.html --include-after-body=_includes/footer.html --katex

#%.ico: %.png
	#convert png:$< ico:$@
	#@chmod 644 $@
#
#%.html: %.md | main.css footer.html
	#pandoc $(PANOPTS) --from=markdown --to=html --output=$@ $<
	#@chmod 644 $@

#all: $(patsubst %.md,%.html,$(wildcard *.md)) favicon.ico sitemap.xml
	#@echo Check permissions, then use make push to upload.

#footer.html: footer.md | main.css
	#pandoc --from=markdown --to=html --output=$@ $<
	#@chmod 644 $@
%.html: %.md
	find . -name '*.md' -type f -exec pandoc $(PANOPTS) --from=markdown --to=html --output {}.html {} \;
	#pandoc $(PANOPTS) --from=markdown --to=html --output $@ $<
	find . -depth -name '*.md.html' -execdir bash -c 'mv -i "$1" "${1//md.html/html}"' bash {} \;
	#@chmod 644 $@
all: $(patsubst %.md, %.html, $(wildcard *.md))
	@echo Check permissions, the use make push to upload.
#sitemap.xml: $(patsubst %.md,%.html,$(wildcard *.md))
	#./gensitemap.sh > $@
	#@chmod 644 $@

#push:
	#rsync -Fav . lock.cmpxchg8b.com:www/

#clean:
	#rm -f *.html *.ico sitemap.xml
