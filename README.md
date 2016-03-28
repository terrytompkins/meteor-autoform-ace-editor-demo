## Overview

Meteor-autoform-ace-editor-demo illustrates how to use the meteor-autoform-ace-editor plugin to add WYSIWYG editing to an Autoform-managed page.  

## QuickStart

  * Ensure that Meteor is installed: [https://www.meteor.com/install](https://www.meteor.com/install)
  * Clone this package and run:
  
```
  % git clone https://github.com/TransWebT/meteor-autoform-ace-editor-demo
  % cd meteor-autoform-ace-editor-demo/app 
  % meteor --settings ../config/settings.development.json
```

The default user created for this application is "user" with a password of "changeme".  You can modify this by editing the file config/settings.development.json.


## Key Related Packages

### Meteor Example Autoform
This package serves as the "Hello, world" basis for demonstrating the AutoForm Ace Editor plugin.  The intention of the package author is to provide a template for starting a new Meteor application.  In this case it is used to create a simple application which contains an an AutoForm which includes an Ace-Editor field.
GitHub page: [https://github.com/ics-software-engineering/meteor-example-autoform](https://github.com/ics-software-engineering/meteor-example-autoform)

### AutoForm
"AutoForm is a Meteor package that adds UI components and helpers to easily create basic forms with automatic insert and update events, and automatic reactive validation."
Atmosphere page: [https://atmospherejs.com/aldeed/autoform](https://atmospherejs.com/aldeed/autoform)

### Ace Editor
"Ace is an embeddable code editor written in JavaScript. It matches the features and performance of native editors such as Sublime, Vim and TextMate. It can be easily embedded in any web page and JavaScript application."
Atmosphere page: [https://ace.c9.io/#nav=about](https://ace.c9.io/#nav=about)

### Ace Meteor Plugin
"A simple package that asynchronously loads Ace editor to a Meteor app only when it is needed."
Atmosphere page: [https://atmospherejs.com/arch/ace-editor](https://atmospherejs.com/arch/ace-editor)

### AutoForm Ace Editor Custom Input
"An add-on Meteor package for aldeed:autoform. Provides a custom input type, "ace-editor", which renders an instance of ace-editor."
Atmosphere page: [https://atmospherejs.com/terrytompkins/meteor-autoform-ace-editor](https://atmospherejs.com/terrytompkins/meteor-autoform-ace-editor)

![](https://raw.githubusercontent.com/ics-software-engineering/meteor-application-template/master/doc/meteor-application-template-home.png)

### Preinstalled packages

This application requires a number of additional packages useful for development. Here is a recent output of `meteor list`, with the built-in Meteor packages removed and some comments elided.

```
aldeed:autoform                           5.8.1  Create forms with automatic insert and update
aldeed:collection2                        2.9.1  Validation of insert and update operations on the client and server.
accounts-password                         1.1.4  Password support for accounts
ian:accounts-ui-bootstrap-3               1.2.89 Bootstrap-styled accounts-ui with multi-language support.
iron:router                               1.0.12  Routing specifically designed for Meteor
sacha:spin                                2.3.1  Simple spinner package for Meteor
twbs:bootstrap                            3.3.6  Front-end framework for responsive, mobile first projects.
underscore                                1.0.4  Collection of small helpers: _.map, _.each, ...
ejson                                     1.0.7  Extended and Extensible JSON library
check                                     1.1.0  Check whether a value matches a pattern
arch:ace-editor                           1.2.1  Integrating Ace editor with Meteor since 2015
terrytompkins:meteor-autoform-ace-editor  0.0.1  Custom "ace editor" input type for AutoForm
```








