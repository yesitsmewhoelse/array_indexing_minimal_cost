## business-rule-service
Implementing business rule as a service.          


## API Methods

## To execute a Business Rule

### `POST  api/business-rule-service/v1/execute`

This method takes the metadata/id(or both) and config object in request body and executes the corresponding business rule. Depending on the input, the business rule is executed using either id or business rule. If both are supplied, the business rule will be executed using metadata.

**Req.body**|**type**|**description**
-----|-----|-----
metadata|Object|Business rule runtime metadata object.
id|String| Busines rule id.
input|Object (optional)|Business rule runtime input.
config|?Object|An object containing any runtime configuration overrides.


## Sample request body           

```
 {            
        "metadata": {},             
        "id": "",               
        "input": {},                
        "config": {            
             "mask": "",                   
             "headers" : {},                 
             "context": ""                 
         },              
 }
 ```

**returns**|**description**
-----|-----
*|Business rule output

## To get metadata of a Business Rule

### `GET  api/business-rule-service/v1/id?mask=%?context=%?language=%`

This method takes the object id of type business rule in the get request and mask, context and language as query parameter and fetches business rule metadata.

**query parameters**|**type**|**description**
-----|-----|-----
mask|String|
context|String|The platform context.
language|String|Cultural info for business rule  (Optional)

**returns**|**description**
-----|-----
*|Runtime view of the business rule metadata.

## Health check

### `GET  api/business-rule-service/v1/health`

This method is used to check if the business rule service is reachable or not.

**returns**|**description**
-----|-----
200|Ready status of the business rule service.

## BusinessRuleService as a side-car

To implement the buisness rule service in the same pod with another existing parent service( side-car pattern ), add an entry similar to the following under the containers label in the parent service deployment.yaml.

Please make sure the environment variable “BUSINESSRULE_SERVICE_PORT” is set with the desired port on which the business rule service should listen. In absence of this variable, the port will be defaulted to 8080 which may conflict with parent service.

Sample:
```
      - name: business-rule-service
        image: dockertr.es.ad.adp.com/bu/business-rule-service:1.0.0-0005-f2106330
        imagePullPolicy: IfNotPresent
        env:
        - name: BUSINESSRULE_SERVICE_PORT
           value: “9090"
        ports:
        - name: http
          containerPort: 9090
          protocol: TCP
        livenessProbe:
          failureThreshold: 3
          httpGet:
            path: /api/business-rule-service/v1/health
            port: 9090
            scheme: HTTP
          initialDelaySeconds: 30
          periodSeconds: 30
          successThreshold: 1
          timeoutSeconds: 29

```
