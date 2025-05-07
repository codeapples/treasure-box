---
title: '[OS] Running code on Windows'
---

# Running code on Windows

The simplest way to run linux specific code on Windows is to install WSL (Windows Subsystem for Linux).

## Installation Steps

If you're on Windows 10 install **Windows Terminal** from Microsoft Store to be able to easily access your linux virtual machine.

#### 1. Enable WSL

- Open PowerShell as Administrator
- Run the following command:
  ```powershell
  wsl --install Debian
  ```
- When asked for a password enter user password of your choice.

#### 2. Install Build Essentials

- Open Debian in Windows Terminal
- Update package list:
  ```bash
  sudo apt update
  ```
- Install build essentials:
  ```bash
  sudo apt install build-essential
  ```
- Verify installation:
  ```bash
  gcc --version
  ```

#### 3. Other Linux distributions

If needed you can install other linux distributions same way via the command line, or by searching Microsoft Store.

## Setting Up VSCode

#### 1. Install WSL Extension

- Open VSCode
- Go to Extensions (Ctrl+Shift+X)
- Search for "Remote - WSL"
- Install

#### 2. Connect to WSL

- Click the green button in the bottom-left corner of VSCode
- Select "New WSL Window"
- Choose "Debian" from the list
- Wait for VSCode to connect to WSL

#### 4. Install extension

When using WSL or other remote machine or container, some extensions need to be installed manually into the environment.

## Testing Your Setup

Now, using VSCode's terminal you should be able to compile and run your files, ex

```bash
   gcc test.c -o test
   ./test
```

## Additional Tips

#### Accessing Windows Files

- Windows drives are mounted under `/mnt/` in WSL
- Example: `C:` drive is accessible at `/mnt/c/`

#### Additional tools

```bash
# Install additional tools
sudo apt install gdb    # Debugger
sudo apt install make   # Build automation
sudo apt install git    # Version control
```

### Recommended VSCode Settings

Add these to your VSCode settings (Ctrl+,):

```json
{
  "C_Cpp.default.includePath": ["/usr/include", "/usr/local/include"],
  "C_Cpp.default.compilerPath": "/usr/bin/gcc",
  "C_Cpp.default.intelliSenseMode": "linux-gcc-x64"
}
```

## Note on server compatibility

The code you write has to run without error on the `opsys.inf.elte.hu` server.

While C standard library and POSIX API code should work, there are some nuances to be aware of.

On the server user has limited rights, and with some syscalls (for example named pipes) you have to create a special file which processes will access. While file creating can be successful on WSL, it can fail on the server because of the limited rights. Therefore it is advised to use `/tmp` directory for temporary files, which is accessible by all users.

If you're opening a project in WSL, that is located on your Windows filesystem, some syscalls may also fail. For example, if you try to create a named pipe in `/mnt/c/...`, it will fail with `Permission denied` error. This is because WSL is not allowed to create files on Windows filesystem that are not accessible by Windows processes.

To ensure server compatibility always upload and compile/run your code on the server.
