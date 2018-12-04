
from PIL import Image, ImageDraw, ImageFont
import CharImg, ImgPlacement, sys, os

# request variables
filename = sys.argv[1] # string i.e. "myimage.jpg"
imageStyle = sys.argv[2] # string i.e. "Style 0"
message = sys.argv[3] # string i.e. "DRMONIQUEROSS"
font = sys.argv[4] # string i.e. "FreeMonoBold.ttf"
fontSize = sys.argv[5] # string i.e. "Small"

# Convert image style string into integer value
if imageStyle == "Style 0":
  imageStyle = 0
elif imageStyle == "Style 1":
  imageStyle = 1
elif imageStyle == "Style 2":
  imageStyle = 2
elif imageStyle == "Style 3":
  imageStyle = 3
elif imageStyle == "Style 4":
  imageStyle = 4
elif imageStyle == "Style 5":
  imageStyle = 5

imageStyle = int(imageStyle)

# Convert font size string into integer value
if fontSize == "Small":
  fontSize = 25
elif fontSize == "Medium":
  fontSize = 35
elif fontSize == "Large":
  fontSize = 45

fontSize = int(fontSize)

count = 0
image = Image.open('/Users/kevin/Documents/' + filename)
myFont = ImageFont.truetype(font, fontSize) #user

(charWidth, charHeight), charImgs = CharImg.createCharacterImgs(message, myFont)
charImgs = CharImg.styleCharImgs(charImgs, imageStyle)
final = ImgPlacement.charOnImg(charImgs, image)
final.save('/Users/kevin/picturegenerator/picturemethis/src/assets/result.png')

# returns the final image name
print('./assets/result.png')