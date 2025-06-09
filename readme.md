## Profitak colors:
- red: hex #7F152E, hsl(346, 72%, 29%)
- orange: hex #FF5D12, hsl(19,100%,54%)
- black: hex #161616, hsl(0,0%,9%)

## Docker

```bash
docker build -t restaurants-frontend .
docker run -d -p 8080:8080 --name obedy restaurants-frontend
```
