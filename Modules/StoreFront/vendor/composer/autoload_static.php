<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit38fcfe035773edfb09468bd00065f74e
{
    public static $prefixLengthsPsr4 = array (
        'M' => 
        array (
            'Modules\\Storefront\\' => 19,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Modules\\Storefront\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit38fcfe035773edfb09468bd00065f74e::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit38fcfe035773edfb09468bd00065f74e::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit38fcfe035773edfb09468bd00065f74e::$classMap;

        }, null, ClassLoader::class);
    }
}