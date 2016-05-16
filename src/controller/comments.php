<?php

const RESOURCE_PATH = __DIR__ . "/../../data/comments.json";

/**
* Get stored data
* @return string json data file content
*/
function getData(){
  $comments = file_get_contents(RESOURCE_PATH);
  return $comments;
}

/**
* Post data to be stored
* @return string json data file content with the posted data added
*/
function postData(){
  $comments = getData(RESOURCE_PATH);
  $commentsDecoded = json_decode($comments, true);
  $commentsDecoded[] = [
      'id'      => round(microtime(true) * 1000),
      'author'  => filter_input(INPUT_POST, 'author'),
      'text'    => filter_input(INPUT_POST, 'text')
  ];
  $comments = json_encode($commentsDecoded, JSON_PRETTY_PRINT);
  file_put_contents(RESOURCE_PATH, $comments);
  return $comments;
}
