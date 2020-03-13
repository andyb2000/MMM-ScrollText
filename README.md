# Module: Scroll Text
Simple to use scrolling text
## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: "MMM-ScrollText",
		position: "bottom_bar",	// This can be any of the regions.
		config: {
			text: "Hello world! - this is text that will scroll",
			size: small
		}
	}
]
````

## Configuration options

The following properties can be configured:

| Option | Description
| ------ | -----------
| `text` | The text to display. <br><br> **Example:** `'Hello world!'` <br> **Default value:** `'Hello world!'`
| `size` | The size of the text
