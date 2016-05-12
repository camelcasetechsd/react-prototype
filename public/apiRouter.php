<?php

/**
* process requests and return response
* @return bool false in case of failure
*/
function routeRequest()
{
    $edge = filter_input(INPUT_GET, 'edge');
    if (! empty($edge)) {
        $edgeController = __DIR__ . "/../src/controller/" . $edge . ".php";
        if(! file_exists($edgeController)){
          return false;
        }
        require_once $edgeController;
        $requestMethod = strtolower(filter_input(INPUT_SERVER, 'REQUEST_METHOD')) . "Data";
        if(! function_exists($requestMethod)){
          return false;
        }
        $requestResult = $requestMethod();
        header('Content-Type: application/json');
        header('Cache-Control: no-cache');
        header('Access-Control-Allow-Origin: *');
        echo $requestResult;
    } else {
        return false;
    }
}

return routeRequest();
