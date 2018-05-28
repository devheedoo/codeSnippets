SELECT table_name
     , column_name
     , column_comment
     , IF(IS_NULLABLE='NO','Y','') AS IS_NOT_NULL
     , data_type
  FROM information_schema.COLUMNS
 WHERE TABLE_SCHEMA = 'TABLE_SCHEMA_NAME'
   AND table_name = 'TABLE_NAME'
