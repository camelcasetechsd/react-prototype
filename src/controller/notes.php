<?php

const RESOURCE_PATH = __DIR__ . "/../../data/notes.json";

/**
* Get stored data
* @return string json data file content
*/
function getData(){
  $notes = file_get_contents(RESOURCE_PATH);
  return $notes;
}

/**
* Post data to be stored
* @return string json data file content with the posted data added
*/
function postData(){
  $notes = getData(RESOURCE_PATH);
  $notesDecoded = json_decode($notes, true);
  $notesDecoded[] = [
      'id'      => round(microtime(true) * 1000),
      'title'  => filter_input(INPUT_POST, 'title'),
      'body'    => filter_input(INPUT_POST, 'body')
  ];
  $notes = json_encode($notesDecoded, JSON_PRETTY_PRINT);
  file_put_contents(RESOURCE_PATH, $notes);
  return $notes;
}

/**
* Put data to be stored
* @return string json data file content with the posted data added
*/
function putData(){
  $notes = getData(RESOURCE_PATH);
  $notesDecoded = json_decode($notes, true);
  $id = filter_input(INPUT_GET, 'id');
  parse_str(file_get_contents("php://input"),$postData);
  foreach($notesDecoded as $noteIdentifier => &$note){
    if($note['id'] == $id){
      $note['title'] = $postData['title'];
      $note['body'] = $postData['body'];
      break;
    }
  }
  $notes = json_encode($notesDecoded, JSON_PRETTY_PRINT);
  file_put_contents(RESOURCE_PATH, $notes);
  return $notes;
}

/**
* Delete data
* @return string json data file content with the posted data added
*/
function deleteData(){
  $notes = getData(RESOURCE_PATH);
  $notesDecoded = json_decode($notes, true);
  $id = filter_input(INPUT_GET, 'id');
  foreach($notesDecoded as $noteIdentifier => $note){
    if($note['id'] == $id){
      unset($notesDecoded[$noteIdentifier]);
      break;
    }
  }
  $notes = json_encode($notesDecoded, JSON_PRETTY_PRINT);
  file_put_contents(RESOURCE_PATH, $notes);
  return $notes;
}
