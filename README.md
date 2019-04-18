# installed bootstrap 3
npm install bootstrap@3 --save
i had to restart the ng serve so the styles could apply

# binding
string interpolation: {{joke.setup}} 
property binding: [hidden]="joke.hide"
input property binding (custom): [joke]="j" (@Input joke)
output event binding: (click)="toggle(joke)"
output properties on our custom components: <app-joke-form (jokeCreated)="addJoke($event)"> (@Output / EventEmitter / emit / $event)
local template variables: <input type="text" #punchline>

p. 34
The way think about these two different ways of binding is in terms of inputs and outputs.
• With the [] we are binding to an input of a Component.
• With the () we are binding to an output of a Component.
This is what we call one-way data binding, since data only flows one way, either into or out of a component.

# domain model
p. 37 ... This class is what we call a Domain Model, it’s just a plain class which we will use to store data and functions.

# deploy
ng build --prod --base-href /ang/jokes
.. creates dist folder