import * as fdk from '@fnproject/fdk'
import {IntegrationInstanceClient} from "oci-integration";
import common from "oci-common";

fdk.handle(async (input) => {
	const client = new IntegrationInstanceClient({
		authenticationDetailsProvider: new common.ResourcePrincipalAuthenticationDetailsProvider()
	});
	const {integrationInstanceId, action} = input

	// Send request to the Client.
	switch (action) {
		case "start":

			return await client.startIntegrationInstance({
				integrationInstanceId
			})
		case "stop":
			return await client.stopIntegrationInstance({integrationInstanceId})
	}

})
