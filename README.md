Connecting nestjs with API

Open terminal

NOTE: you can cd to anywhere you want to create your nestjs cli
npm i -g @nestjs/cli
nest new veridid-api
select npm and click enter
cd veridid-api
code ..
To open vs code

navigate to src to verify the following are downloaded
app.controller.specs.ts
app.controller.ts
app.modules.ts
app.service.ts
main.ts
are all available
Open terminal inside veridid-api
npm run start:dev
click enter
Note: the runs dev is in watch mode, any changes made, it will recompile instantly.
open browser and insert localhost:3000
enter
you should see the default greetings  Hello World displayed
OR
Note: To find local host open terminal and insert Ipconfig /all for windows and fro mac,Type /sbin/ifconfig
The second way is to insert your numerical localhost and add 3000 at the end example mine"192.168.2.52.3000 

Next,
 stop the Hello World displayed
by pressing control c
Next,
Customize by generating modules, and new folders 

nest generate module afj
inside folder afj generated afj.module.ts will be available
Note: do same for controller and service
nest generate controller afj
nest generate service afj
Next,
check the app.module.ts to see if the afj module is imported
NOTE: to use the rest call copy the @Get hello from app controller and paste in Afj.controller inside the class
also add to import the afjservice from afj.service
and then, import the strings from app.service and paste in afj.service and
 also in afj.controller,
import controller,Get from @nestjs/common
Once done, run npm start:dev
add /afj to localhost:3000
example localhost:3000/afj
it should be showing afj configuration 
example: 'Hello World from VeriDid Inc!'
Note: Make sure you save your code and also refresh the browser to get the latest rendering.
NOTE: Noticed {"statusCode":404,"message":"Cannot GET /test", "error":"Not Found"
 when trying to run nestjs on my localhost, that means your connection is slow,especially when using wireless.
Solution, open main.ts inside I enabled CORS (Access-Control-Allow-Origin) setting it to true
(AppModule , { cors: true});
save then run again
please see main.ts for all the codes

NOTE: Another note, make sure you observe the result on your terminal to identify what was mapped.
Example: Added addition Call GET option test after afj, the mapped output was: Mapped {/afj/test,GET} route
when checking on your browser, insert localhost:3000/afj to see aft page
and,
localhost:3000/afj/test to see the test page
or better still
192.168.2.52.3000/afj
192.168.2.52.3000/afj/test
 Next,
Building a swagger interface
stop the dev run
control c
Open nestjs documentation
go to recipes 
select Swagger
open terminal 
npm install --save @nest js/swagger
start up the application

npm run start:dev
scroll down on nestjs recipes swagger page to main.ts
copy form const config =new
to
SwaggerModule.setup('api', app, document);
paste in vscode main.ts
rename title,description add tags
import {SwaggerModule,DocumentBuilder} from '@nestjs/swagger';
in main.ts
Save your  entries
again localhost:3000/api
Done Swagger interface is ready.

Testing Api Calls

in any of the 3 calls click on the dropdown arrow select try it out tab
click execute button
You should see the the responses:curl, code, response body.response headers
stop the dev run (control c)
Create additional module
nest generate module connection
nest generate controller connection
nest generate service connection
go to vscode and refresh connection folder containing module controller and services should be available
NOTE: the easiest way is to copy files that was working and change the names example for afj.controller.ts copy and paste in connection.controller.ts and change all the attributes to connection from afj and so on.
similarly copy from constructor  to return getHello in afj controller and paster in connection. controller

also,
go to afj.service.ts and copy and paste the codes example the "getHello" to connection.ts change all afj entries to connection
save
run npm run start:dev
refresh swagger interface
Result connection should be there
Now we have 3 modules, APP, AFJ and CONNECTION 
each of which could work independently since the all contain Module, Controller, and service, this will make things easier when creating new classes.
Next, we try and POST we can use it to pass info
for this let use the AFJ module

in the nestjs documentation go to controllers use the cats.controller.ts examples for @POST
Overview/Controller
example: @Post("create")
return this.afjService.create;create(): string {
return 'This action adds a new name';
}
also add Post to the import in afj.service.ts

run npm run start:dev
refresh swagger
Post added to swagger api

Create Parameters by Creating a DTO class

inside the afj folder, create a folder call it dto
inside the dto folder create a file named create.dto.ts
copy example from create-cat.dto.ts and paste in the newly created file
rename it create-AFJ.dto
since we are doing Api 
change strings to name, port, endpoint

Navigate to afj controller @Post to modify the calls
@Post("create")
create(@Body() createAfjDto: CreateAfjDto): string {
return 'This action adds a new name';
}

run npm run start:dev
open localhost:3000/api
NOTE: this is to check the dto class entry
Next:

check if the post works in swagger
click Post, 
select try it out 
copy 
name:
port:
endpoint: 
from createdto file
paste in
POST request body as
example
{
"name":"Christopher",
"port":8000,
"endpoint":"192.168.2.41:3000",
}
click execute tab

response body
This action adds new name should show

Verify if you can view the response on the console
Go to afj.controller.ts
second line on the @Post(create)
add
console.log("DTO is:", createAfjDto);
save it
and refresh complier
go to POST in swagger
Click clear Tab
Click the execute tab 
NOTE: this is to run the request again
navigate to terminal and check response
NOTE: DTO is: {'name:'Christopher', port:8000, endpoint:'192.168.2.41:3000'}
should appear.

Putting Default into Swagger interface
NOTE: other example uses npm install class-validator but and using nestjs specific
npm i @nestjs/class-validator
update createAfjDto file with the following data

import {ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateAfjDto{
@ApiProperty({ default: 'Christopher'})
@IsString()
@IsNotEmpty()
readonly name: string;

@ApiProperty({ default: '8000'})
@IsNumber()
@IsNotEmpty()
readonly port: number;

@ApiProperty({ default:'192.168.2.41:3000'})
@IsString()
readonly endpoint: string;

}
NOTE: The reason for the default value is because each properties has to be specific values as in in default value, example if a properties is a string, you cannot put a number, or if its a name you cannot put a string as son on

NETWORKING: taking every properties will look at it later.

Making a service call

go to controller.ts
@POST add under return
return this.afjService.create()
Also copy import {CreateAfjDto} from './dto/createafj.dto
and paste in afj.service.ts file

also 
make a new call in the afj.service.ts
create(createDto:CreateAfjDto): string {
console.log("Service call DTO:",createDto)
return "Hello";
}
Next:

Go back to swagger api POST and execute the call

NOTE:Best Practice, configure DTO for every single call we have it is cleaner and better to understand,manage, integrate and trace.


Using Request URL in Postman
Open postman
create a new collection
example: veridid-api
add a new call example add a POST
NOTE: select Post from drop menu
paste the url address from swagger http://192.168.2.41:3000/afj/create
click Body and select raw, JSON
Navigate back to swagger and copy the JSON used example
{
"name":"Christopher",
"port":8000,
"endpoint":"192.168.2.41:3000",
}

paste JSON in Postman
and
Click send

Response will be -- Hello

Adding entry to Post man request



add name to christopher to include Christopher Oladimeji

on same JSON used as example 
click send and check the console in your vscode Terminal
result-- service call DTO (name:'Christopher Oladimeji',port:8000, endpoint: '192.168.2.41:3000')# nestjs-api
