---
title: "QEMU GPU Passthrough Methodology"
date: 2022-10-08T13:27:14-05:00
author: "C.J. Wade"
tags: [qemu, gpu, linux]
---

# QEMU GPU Passthrough Methodology

The following are the steps that I take in order to set up a Windows, specifically 11, virtual machine under Pop!_OS Linux.

1. If I am working with a new install of Pop!_OS, I run this [script](https://github.com/pavolelsig/Passthrough_helper_PopOS) from Pavol Elsig. It takes all the grunt work out of hiding your GPU from the host os.

2. I then follow this [guide](https://christitus.com/vm-setup-in-linux/) from Chris Titus. It walks you through installing the necessary packages, as well as some tweaks for networking and allowing your `$USER` to access the virtualization packages.

3. Use `virt-manager` to create a new virtual machine. Before beginning the installation, copy your Windows 11 iso file to `/var/lib/libvirt/images/`. You will need root privileges. I would recommend that you download the [latest virtio-win driver iso](https://github.com/virtio-win/virtio-win-pkg-scripts), and place it in the same directory as the Windows 11 iso.

    1. Choose `Local install media.`

    2. Select your guest os iso file. `virt-manager` will auto-detect what os the iso is.

    3. Give the virtual machine the amount of RAM that you want. Leave the CPUs field as it is for now.

    4. Personally, I like to passthrough a physical disk for the guest using the `Select or create custom storage` field.

    5. Name the virtual machine a name that is easily identifible, and select `Customize configuration before install`.

4. On the overview tab, I select the `OVMF_CODE_4M.secboot.fd` firmware.

5. On the CPUs tab, I click on `Topology`, then `Manually set CPU topology`. I choose 1 for `sockets`, put in half of my physical CPU cores for `cores`, and give each core two threads for `threads`.

![virt-manager CPU Tab](/img/virt-manager_cpu_tab.png)

6. I remove the NIC device. Doing this will allow you to make a local account instead of being forced to make a Microsoft account.

7. Then click the `Add Hardware` and add the GPU and the GPU audio device one after the other. Also add another CDROM drive and put the virtio-win iso in it.

8. Now for a little tinkering. Click on the `Overview` tab, then the `XML` sub-tab. Under the `<vcpu>` tags, you can add `<cputune>` tags to pin certain cores of your CPU to the virtual machine to improve performance. This **will** differ from machine to machine (you can check your system by running `lscpu -e`), but I have chosen to pin half my CPU cores as follows.

```xml
<cputune>
  <vcpupin vcpu="0" cpuset="6"/>
  <vcpupin vcpu="1" cpuset="7"/>
  <vcpupin vcpu="2" cpuset="8"/>
  <vcpupin vcpu="3" cpuset="9"/>
  <vcpupin vcpu="4" cpuset="10"/>
  <vcpupin vcpu="5" cpuset="11"/>
</cputune>
```

9. Sometimes when NVIDIA GPUs detect that they are running in a vm, they will respond with a `CODE 43` error and refuse to work. NVIDIA has shown that they are becoming more lax with this behavior, but just for peace of mind, I recommend that you add the following between the `<features>` tags.

```xml
<features>
  <acpi/>
  <apic/>
  <hyperv mode="custom">
    <relaxed state="on"/>
    <vapic state="on"/>
    <spinlocks state="on" retries="8191"/>
    <vpindex state="on"/>
    <runtime state="on"/>
    <synic state="on"/>
    <stimer state="on"/>
    <reset state="on"/>
    <vendor_id state="on" value="123456879ab"/>
  </hyperv>
  <kvm>
    <hidden state="on">
  </kvm>
  <vmport state="off"/>
  <smm state="on"/>
  <ioapic driver="kvm">
</features>
```

10. Now move to the `Boot Options` tab and make sure that the CDROM is set higher than the drive you are installing Windows to. Now you can click the `Begin Installation` button and install Windows! (Tip: click)

11. After Windows is installed, shut it down, go back, and re-add the `nic`. The default options should be find.

12. Turn on the virtual machine, and install the 64-bit msi on the root of the virtio-win disc. You're basically installing this instead of drivers from your CPU or motherboard manufacturer's website.

13. We can now open the Microsoft Store, go to the `Downloads and Updates` section, and make sure that the program `App Install` is up-to-date.

14. Then open either `Windows Terminal` or `Powershell` as administrator and run the command `iwr -useb https://christitus.com/win | iex`. This is a [script](https://github.com/ChrisTitusTech/winutil) by Chris Titus that disables a lot of Window's builtin telemetry and inane default settings as well as automatically installs programs from the internet.

15. There are many things that this script allows you to do, but the main thing as far as GPUs are concerned is under the `Updates` tab. Select the `Desktop` preset at the top of the screen and let the script go to work. (NOTE: It is incredibility important to run the script before you install updates from Windows Updates. In my experience, it will download updates that led to the dreaded `CODE 43` error.)

16. You can now go to the `Settings` app and check for updates. It is a good thing if Windows Update does not automatically install drivers for the GPU, as the script disabled that functionality. You should now go and download the drivers for your GPU from the manufacturer's website.

17. If your GPU starts displaying video then you are done!

Hopefully now you know how to setup a GPU accelerate virutal machine on Linux. It can be quite the handy skill both for the tinkerer and the professional!
