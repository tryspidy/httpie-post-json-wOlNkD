# a short one
echo '{"hello": "world"}' | http POST pie.dev/post
# a file one
http POST pie.dev/post < files/data.json