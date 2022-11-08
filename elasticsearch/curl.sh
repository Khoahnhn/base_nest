# Get information
curl -u elastic:changeme localhost:9200

# index
curl -u elastic:changeme -X PUT "localhost:9200/user?pretty"
curl -u elastic:changeme -X PUT "localhost:9200/article?pretty"

# document
curl -u elastic:changeme -X GET "localhost:9200/article/_doc/Gx5i2JXFRSeokgW_6WmLfw?pretty"
