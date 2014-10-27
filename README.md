usearch
=======

This is a micro search and autocomplete engine that exposes an HTTP API for
searching and adding words.


Usage
-----

Create the dictionary with:

```
POST /dictionary HTTP/1.1
Content-Type: application/json

["foo","bar","baz","quux","fred"]
```

Then search with:

```
GET /search/f HTTP/1.1
```

... which will return:

```
{"status":"success", "data":["foo","fred"]}
```


Development
-----------

1. Install the latest version of [Docker](https://www.docker.com/).

2. Clone this repo and build the Docker image:

        docker build -t usearch .

3. Install dependencies locally:

        docker run --rm -v $(pwd):/usr/src/app usearch npm install

4. Run the server with:

        docker run -it --rm -p 127.0.0.1:8000:8000 -v $(pwd):/usr/src/app usearch

The app will be available on http://127.0.0.1:8000/.


License
-------

[MIT](LICENSE)
