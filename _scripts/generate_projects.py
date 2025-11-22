#!/usr/bin/env python3
import os
import glob
import yaml
import re

def extract_frontmatter(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    match = re.match(r'^---\s*\n(.*?)\n---\s*\n', content, re.DOTALL)
    if match:
        try:
            return yaml.safe_load(match.group(1))
        except:
            return {}
    return {}

# Find all markdown files
posts = []
for md_file in sorted(glob.glob('posts/**/*.md', recursive=True), reverse=True):
    metadata = extract_frontmatter(md_file)
    if metadata.get('title'):
        url = md_file.replace('posts/', '/posts/').replace('.md', '.html')
        posts.append({
            'title': metadata['title'],
            'url': url,
            'date': metadata.get('date', '')
        })

# Generate markdown
print("---")
print("title: Projects")
print("---\n")
for post in posts:
    print(f"## [{post['title']}]({post['url']})")
    if post['date']:
        print(f"*{post['date']}*")
    print()
