# typescriptsDecoratorWithSystemjs

### to load module on browser we need to add these scripts 
<script src="node_modules/systemjs/dist/system.js"></script>
<script>
var config = {
		 packages: {
		        "out": {
		            defaultExtension: "js"
		        }
		  }
		}
System.config(config);
SystemJS.import('out/index');
</script> 

### also we need add tsconfig.json file with below as module , So that it can recognized by systemjs loader

 "module": "system",
 
### install lite-server globally , it will deploy the code on a simple server

npm install lite-server -g 

### run lite-server from root folder

lite-server