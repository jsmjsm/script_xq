/**
 * @fileoverview Example of HTTP rewrite.
 *
 * @supported Quantumult X (v1.0.5-build173)
 */

// $request, $response, $notify(title, subtitle, message), console.log(message)
// $request.scheme, $request.method, $request.url, $request.path, $request.headers
// $response.statusCode, $response.headers, $response.body
//
// $prefs is for persistent store and the data of $prefs will be cleared when Quantumult X is deleted.
// $prefs.setValueForKey(value, key), $prefs.removeValueForKey(key), $prefs.removeAllValues(). Returns true or false, value and key should be string.
// $prefs.valueForKey(key) returns value.
//
// setTimeout(function() { console.log("abc"); }, 1000);
//
// You can optional change the response headers at the same time by using $done({body: modifiedBody, headers: modifiedHeaders}); only change the response headers is not allowed for script-response-body. The modifiedHeaders can be copied and modified from $response.headers, please do not change the content length, type and encoding field.
// Response status can also be optional changed by using $done({body: modifiedBody, headers: modifiedHeaders, status: modifiedStatus}), the modifiedStatus should be like "HTTP/1.1 200 OK"

// > URL TO MATCH: aHR0cHM6Ly92c2NvLmNvL2FwaS9zdWJzY3JpcHRpb25zLzIuMS91c2VyLXN1YnNjcmlwdGlvbnMvLio=
// > MITM: dnNjby5jbw==

var body = $response.body
var obj = JSON.parse(body)

// create a new json body
var txt =
    '{"user_subscription":{"user_id":221083210,"subscription_code":"VSCOANNUAL","sku":"VSCOANNUAL","expired":false,"starts_on_sec":1613971748,"expires_on_sec":1914576548,"last_verified_sec":1613972180,"canceled_at_sec":null,"source":1,"payment_type":2,"invalid_reason":0,"is_trial_period":true,"is_intro_period":false,"intro_offer_consumed":true,"is_active":true,"auto_renew":true,"is_in_grace_period":false},"created_at":"2021-02-23T04:47:44.233345581Z"}'
var newObj = JSON.parse(txt)

// modify the user id
newObj.user_subscription.user_id = obj.user_id

// done
newBody = JSON.stringify(newObj)

// console.log(newBody)

$done(newBody)
