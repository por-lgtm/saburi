import urllib.request
import ssl

url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSB8fNSVaXs-ldPc0c5RzmH0c2koKNCejB3w4AoFNnvoMrAypb4q9jeCMi-c_1sdqvYfW3Pn-axmydU/pub?gid=1069407824&single=true&output=csv"
output_path = r"src/data/menu.csv"

# Bypass SSL verification if needed
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

try:
    with urllib.request.urlopen(url, context=ctx) as response:
        with open(output_path, 'wb') as f:
            f.write(response.read())
    print(f"Successfully downloaded to {output_path}")
except Exception as e:
    print(f"Error downloading: {e}")
