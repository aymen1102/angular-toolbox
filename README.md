First steps :
- install node : node -v
- install npm : npm -v
- install angular CLI : npm install -g @angular/cli 
- check the version of angular CLI : ng version
- create a project : ng new my-app
- run the application : npm run ng serve
- you can now show your first app  : http://localhost:4200
- install a different version of Angular CLI : npm install -g @angular/cli@9.0


Files and folder structure :
- package.json : project name, version, app commands, dependencies...
- node_modules : contains all libraries
- src : contains the app code
- src/app : contains all the components
- src/assets : public files likes images , css...
- src/envrionnement : contains all environnement parameters
- src/index.html : first html page to be run
- src/style.css : contains global style
- package-lock.json : contains all details of dependencies
- angular.json : contains all the application configuration
- tsconfig.json : contains typescript configuration
- .browserslistrc : contains the browser configuration
- karma.conf.js : contain testin configuration
- src/polyfills.ts : contains polyfills needed by angular and it is loaded before the app


Interpolation : lets you incorporate dynamic string values into your HTML templates.
Interpolation refers to embedding expressions into marked up text. By default, interpolation uses the double curly braces {{ and }} as delimiters.


Angular CLI & important commands :
ng help : show all CLI commands 
ng generate component <component name>
ng g c <component name>
ng generate module <module name>
ng g c <module name>\<component name> : create a component inside module
ng g class <class name>
ng g service <service name>


Component : Components are the most basic UI building block of an Angular app. An Angular app contains a tree of Angular components. Angular components are a subset of directives, always associated with a template. Unlike other directives, only one component can be instantiated for a given element in a template.A component must belong to an NgModule in order for it to be available to another component or application.

Inline style Component :
Create a Component without style file : ng g c inline-style-component --inline-style

Inline template Component :
Create a Component without template file : ng g c inline-style-component --inline-style

Module : a module is a mechanism to group components, directives, pipes and services that are related, in such a way that can be combined with other modules to create an application.

property binding vs interpolation :