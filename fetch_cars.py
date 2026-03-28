import urllib.request
import json
import time

cars = [
    "Porsche 911 Turbo", "Ferrari SF90", "Lamborghini Revuelto", "McLaren 750S",
    "Chevrolet Corvette Z06", "Aston Martin Valhalla", "Porsche Taycan",
    "Ferrari Roma", "Maserati MC20", "Lamborghini Urus"
]

colors = ["default", "wine-red", "dark-purple", "future-white", "neon-blue"]
color_queries = ["", "red", "purple", "white", "blue"]

int_colors = ["standard", "red", "white"]
int_queries = ["interior", "interior red", "interior white"]

results = {}

def fetch_img(query):
    try:
        url = "https://unsplash.com/napi/search/photos?query=" + urllib.parse.quote(query) + "&per_page=1"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req)
        data = json.loads(res.read().decode('utf-8'))
        if data['results']:
            return data['results'][0]['urls']['raw'] + "&auto=format&fit=crop&w=600&q=80"
    except Exception as e:
        print(f"Error fetching {query}: {e}")
    # Fallback to a placeholder
    return f"https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=600&q=80" # generic porsche

for i, car in enumerate(cars):
    print(f"Fetching {car}...")
    car_id = i + 1
    results[car_id] = {'exterior': {}, 'interior': {}}
    
    for c, q in zip(colors, color_queries):
        results[car_id]['exterior'][c] = fetch_img(f"{car} {q} car".strip())
        time.sleep(0.5)
        
    for c, q in zip(int_colors, int_queries):
        results[car_id]['interior'][c] = fetch_img(f"{car} {q}")
        time.sleep(0.5)

with open('carImages.json', 'w') as f:
    json.dump(results, f, indent=2)

print("Finished fetching images.")
