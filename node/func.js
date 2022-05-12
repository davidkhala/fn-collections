import * as fdk from '@fnproject/fdk'

fdk.handle(async (input) => {

	const { FN_APP_ID, FN_FN_ID, FN_FORMAT, FN_LISTENER, FN_MEMORY, FN_TYPE } = process.env
	console.debug(JSON.stringify(input))
	console.debug(JSON.stringify({ FN_APP_ID, FN_FN_ID, FN_MEMORY}))
	return { input, FN_APP_ID, FN_FN_ID, FN_FORMAT, FN_LISTENER, FN_MEMORY, FN_TYPE }
})
