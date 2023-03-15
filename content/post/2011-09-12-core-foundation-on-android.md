+++
title = "Core Foundation on Android"
date = "2011-09-12T00:00:00Z"
+++

On a recent iOS project, I started programming a static library with the intention of sharing it with an Android project which was to contain very similar functionality. This much was easy: creating the project in X-Code, I had access to almost any library I needed by simply adding the appopriate frameworks and header files to my project and building just like I normally would. There were a few bumps and bruises on the journey to Android, however.  Below I've outlined my journey:

+   *Learn the NDK structure, but from whom?* Firstly, I needed to decipher what needed to happen where and when as the NDK has changed twice in the past six months, making many blog posts obsolete or misleading. Honestly, had I started out in the documentation that had shipped with the NDK I downloaded, I probably would have been much better off, and much less confused. This would be my advice to anyone getting started. In the end you will realize that (as strange as it seems) those txt docs best resource out there simply because they don't lie, and the Internet does with stuff like this that is always changing.
+   *Reverse engineer various function declarations from Bionic header files (Android's version of glibc)* The android.git.kernel.org  site was down while I was trying to figure all this out, so that was part of the problem.  But, honestly, I'm not sure if there *is* any documentation on the Bionic header files.  In comparison to the extensive documentation provided by Apple to all of their APIs, developing on the NDK has a feeling not unlike that of any project you've seen created in some dude's basement.
+   *Getting boost and stl port to compile and link.* Later versions of the NDK (5 and later) include STL port and support for runtime exceptions, so this wasn't too bad.  I also found a [blog post](http://www.codexperiments.com/android/2011/05/tips-tricks-building-boost-with-ndk-r5/) that was invaluable for help getting boost to compile.
+   *Debugging errors and getting stack traces from adb's logcat.* Again, searching for
how to do this on the Internet was pointless.  The NDK now includes a script creatively called ndk-stack. The usage is pretty self explanatory:

    ```
    Usage:
    ndk-stack -sym <path> [-dump <path>]
          -sym  Contains full path to the root directory for symbols.
          -dump Contains full path to the file containing the crash dump. 
              This is an optional parameter. If ommited, ndk-stack will
                read input data from stdin

       See docs/NDK-STACK.html in your NDK installation tree for more details.
    ```

Once these items were in place, the last hurdle was getting Core Foundation Lite to compile on Android as I couldn't find documentation on how anyone had accomplished it. The closest I came was finding [someone](http://unu.novajo.ca/users/dccote/weblog/0514e/CoreFoundation_Lite_on_Linux.html) who had compiled Core Foundation Lite on Linux five years ago.

Based on work from this posting, I was able to get a compiling/working version of CF 299.33 on Android by making a few relatively minor patches to the source code. I've since posted this version on [Github](https://github.com/markshiz/corefoundation-lite-android) under the terms of the Apple Public License.

Why use Core Foundation in a library you're sharing between iOS and Android, you might ask?  One of the biggest pluses from an iOS perspective was the Toll-Free Bridging support with Cocoa.  Retaining arrays, strings, dictionaries, etc was as quick and easy as recasting the core foundation objects into their relative Cocoa types. For example, given:

```language-cpp
class Library { 
public:
    CFArrayRef getCFArrayRef();
};
```

Obtaining an array of data from your static library can be as easy as:

```language-objectivec
NSArray* myArray = (NSArray*)library->getCFArrayRef();
[myArray retain];
```
    
When your library object falls out of scope or is deleted, myArray will still be holding a valid reference to your array. This cuts down on data copying and makes your application more performant on iOS where hardware specifications are typically lower powered than on Android.

From the Android side of things, using Core Foundation makes sense as it gives you easy, cross platform support for Unicode strings.  Both Dalvik (Android's VM) and Cocoa use UTF-16 String by default. This keeps you away from the nightmare that is <code>wchar_t</code>. 

Finally, Core Foundation Lite gives Android the ability to read property list (plist) files, which means you can have one set of configuration documents shared across both platforms.
