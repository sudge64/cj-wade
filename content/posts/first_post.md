---
title: "Testing"
date: 2022-09-19T16:14:31-05:00
author: "CJ Wade"
---

## Second Heading

### Third Heading

An Unordered List:

* Item one

* Item two

* Item three

An Ordered List:

1. Item one

2. Item two

3. Item three

> Block quotes

Here is some C++ code:

```c++
#include <iostream>
using namespace std;

int main(){
    cout << "Hello World!" << endl;
}
```

And here is some YAML

```yaml
---
- hosts: localhost
  connection: local
  become: true

  pre_tasks:
  - name: Update package manager "apt" cache
    tags: always
    apt: 
      update_cache: yes
      upgrade: 'yes'
    changed_when: false
    when: ansible_distribution in ["Debian", "Ubuntu", "Pop!_OS"]

  - name: Update package manager "dnf" cache
    tags: always
    dnf: update_cache=yes
    changed_when: false
    when: ansible_distribution in ["Fedora"]
```

Finally we have Python

```python
print("Hello World!")
```

Here is a table that describes the behavior of a two input AND logic gate.

| x | y | AND |
| :--: | :--: | :--: |
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

This is my first post! Now to pontificate on the matters of the world...
