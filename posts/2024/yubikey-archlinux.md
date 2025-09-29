---
title: How to Get a Yubikey working on Arch Linux
date: 2024-10-19T23:44:00-06:00
author: "C.J. Wade"
---
# How to Get a Yubikey working on Arch Linux

In recent months, I've been becoming more and more security conscious. To that end, I've invested in hardware security keys, but have had a bear of a time getting them to work on Arch Linux (my operating system of choice, by the way).

This morning I've finally had a break through and thought I'd share my findings.

## Problem

I'm using the offical [Yubico Authenticator](https://www.yubico.com/products/yubico-authenticator/#h-download-yubico-authenticator) app and no accounts, passkeys, certificates, or slots would show up in their tabs. Thankfully, the key itself did show up.

![An incredibily helpful error message.](/images/2024/yubi_failure.png)

Launching the app from the terminal showed that there was an infinite loop of the authenticator failing to find whatever it was looking for.

Okay, so the app can't talk to something on the back end, my first thought being a system service of some sort.

## A Partial Solution

A quick search found [this Reddit thread](https://www.reddit.com/r/yubikey/comments/stnuua/how_do_i_get_yubico_authenticator_to_work_on/), where the top comment confirmed my theory. You need to enable the `pcscd` service. Now, this service is for interfacing with smart cards (more reading [here](https://wiki.archlinux.org/title/Smartcards)), and smart cards are not as profilic today as they once were, so you will need to install the `pcsclite` package.

```bash
sudo pacman -S pcsclite
```

The Arch Wiki page linked above also recommends installing the `ccid` package, _which provides a generic USB interface for smart cards._ [1](#1)

```bash
sudo pacman -S ccid
```

Now we can enable the service.

```bash
sudo systemctl enable pcscd.service
sudo systemctl start pcscd.service
```

In my experience, this alone does not fix the issue and I still receive the above error message.

## The Final Piece of the Puzzle

All that build-up brings us to today. I was playing around with enabling and disabling the serivce, and on a whim, I decided to check the status of the service. This output immediately caught my eye:

```bash
pcscd.service: Referenced but unset environment variable evaluates to an empty string: PCSCD_ARGS
```

Plugging that into your search engine of choice should lead you to this [blog post by Ludovic Rousseau](https://ludovicrousseau.blogspot.com/2021/08/pcsc-lite-configuration-using.html). At the end of the article, is this snippet:

_### pcscd arguments_

_pcscd is started with the extra parameter $PCSCD_ARGS. By default this variable is empty. But you can define PCSCD_ARGS in /etc/default/pcscd to add more arguments to pcscd._

_For example you can use:_

_`PCSCD_ARGS=--debug`_

_to get debug messages in the systemd journal._ [2](#2)

Additionally, Rousseau mentions that the default configuration file for `pcscd.serivce` is located at `/etc/default/pcscd`. I created the file as the super user, added the single line `PCSCD_ARGS=--debug`, and restarted the service.

Voila! The authenticator was now working perfectly!

![The Authenticator working as expected.](/images/2024/yubi_success.png)

It is my hope that having this information in one spot can help someone down the road.

## A Bashful Realization

So, while writing this post, I checked the man page for `pcscd` and noticed this section:

```bash
CONFIGURATION FILE
       It is possible to set arguments that will be used by pcscd with the configuration
        file /etc/default/pcscd For example you can increase the debug level using:
              PCSCD_ARGS=--debug

       Or set environment variables like:
              PCSCLITE_FILTER_IGNORE_READER_NAMES="Twin"
              PCSCLITE_FILTER_EXTEND_READER_NAMES=" $HOSTNAME"

       See https://blog.apdu.fr/posts/2021/08/pcsc-lite-configuration-using/ ⟨⟩ for more details.
```
[3](#3)

Moral of the story, Read The (F word of your choice) Manual.

## References

1. <a name="1"></a> [Copied from Arch Wiki](https://wiki.archlinux.org/title/Smartcards)
2. <a name="2"></a> [Copied from Ludovic Rousseau's Blog post](https://ludovicrousseau.blogspot.com/2021/08/pcsc-lite-configuration-using.html)
3. <a name="3"></a> Run `man pcscd`
