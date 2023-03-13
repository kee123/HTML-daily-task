<?php

namespace MyNamespace;


class MyClass {
    public function sayHello() {
        echo "Hello from MyNamespace!";
    }
}

namespace AnotherNamespace;


class AnotherClass {
    public function sayHello() {
        echo "Hello from AnotherNamespace!";
    }
}

use MyNamespace\MyClass;


$myObject = new MyClass();
$myObject->sayHello();

$anotherObject = new \AnotherNamespace\AnotherClass();
$anotherObject->sayHello();
use AnotherNamespace\AnotherClass as MyAlias;

$myAliasObject = new MyAlias();
$myAliasObject->sayHello();
?>