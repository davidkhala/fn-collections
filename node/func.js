import * as fdk from '@fnproject/fdk'

fdk.handle(async (input) => {

	console.log(input)
	return {input}
})
