# Knit Calculators
Welcome to the Knit Calculator website, the go-to resource for all things knitting. Irrespective you're a novice or an experienced crafter, the purpose of this site is to make the knitting experience as smooth and enjoyable as possible. Whether it is about keeping track of stitches and rows, estimating yarn requirements, or tackling gauge conversions. Happy knitting!

![image](https://github.com/CharlottaG/knit-calculators/assets/138576943/2cae4c76-be7c-4dff-ac44-8e5a15439d1e)


## Table of contents

-   Purpose and target audience
    -  User stories
-   Design and usability
    -   Wireframes
    -  Color palette
    -  Typography
-   Functionality
-   Future development
-   Bug fixes
-   Technologies
    -   HTML, CSS and Javascript
-   Accessibility
-   Deployment
    -   Testing
    -   Validation
-   Credits
    -   Acknowledgement
    -   Code used
    -   Media
 
## Purpose and target audience
The purpose of the site is to facilitate all calculations related to knitting and gather them in one place.
The target audience is obviously knitters, no matter the experience level, you need to do calculations.

### User stories
**As a beginner knitter**, I want a knit calculator to help me count stitches and rows, so I can keep track of my progress and create accurate, well-proportioned projects.
    
**As an experienced knitter**, I need a yarn estimation feature in the knit calculator to determine the exact amount of yarn required for my project, considering different variables such as gauge and stitch pattern.
    
**As a pattern enthusiast**, I would like the knit calculator to provide a gauge conversion tool to adapt patterns with different gauge measurements, making it easier to follow patterns that don't match my yarn or needle size.

 **As a beginning or intermediate knitter**, I want the knit calculator to guide me on how many stitches to cast on and how to increase or decrease evenly.
 
#### User stories for future development
  **As a creative knitter**, I want the calculator to assist me in scaling patterns up or down, ensuring that I can adjust projects to my desired size and achieve a perfect fit.
    
  **As a budget-conscious crafter**, I require the yarn substitution feature in the knit calculator to help me select alternative yarns while ensuring that the new yarn's characteristics match the original pattern's requirements.
    
  **As a frequent pattern user**, I need a yarn weight conversion tool to easily switch between different yarn weight classifications, making it simpler to use patterns from various sources.


  ## Design and usability
The website has been thoughtfully designed with a mobile-first approach, recognizing that users will likely use it as a handy tool during their knitting activities. The primary emphasis is on calculations, featuring prominently sized buttons that allow users to easily navigate to their desired information or calculations. Results have been purposefully designed to stand out, ensuring effortless visibility, especially on smaller mobile screens.

The color palette has been carefully chosen to offer excellent contrast, enabling users to focus on the most essential elements. Additionally, a black opacity background has been applied to frame different calculations, providing added clarity to distinguish information related to each specific calculation.

To facilitate user decision-making, all calculations are displayed right from the start, allowing users to quickly determine if the site offers the calculations they require. To streamline the user experience and reduce the number of inputs, the calculations intelligently retrieve answers from previous calculations, eliminating the need for users to repetitively enter information they've already provided.

### Wireframes
![image](https://github.com/CharlottaG/knit-calculators/assets/138576943/2d61d6dd-8f0b-44ca-b148-061d4b76cf29)

### Color palette

![image](https://github.com/CharlottaG/knit-calculators/assets/138576943/9a3406d9-699b-464b-9c0d-7713df1859dc)


**Buttons and modal windows**  employ a contrasting combination of orange backgrounds with black text, ensuring clear visibility and distinction.
![image](https://github.com/CharlottaG/knit-calculators/assets/138576943/a254c9ab-b84d-4a53-a135-2cd86d85acb7)

[Contrast checker](https://webaim.org/resources/contrastchecker/?fcolor=000000&bcolor=FFA500)

### Typography
The Patrick Hand font was chosen for the logo to evoke a creative and crafty aesthetic.
![image](https://github.com/CharlottaG/knit-calculators/assets/138576943/c99ef29a-fd8d-429c-90ae-e1c522d48314)

For the body copy, a sans-serif font, Raleway, has been selected to maintain a tranquil and serene atmosphere.
![image](https://github.com/CharlottaG/knit-calculators/assets/138576943/d63b796a-1908-463e-ac45-10d1be98c64a)

### Icons

Icons used come from Font Awesome

- Instagram
- Ravelry
- Pinterest
- Contact/Mail to

Fav icon used for the tab image comes from [Vector Stock](https://www.vectorstock.com/royalty-free-vector/yarn-ball-icon-vector-17150800) and was generated through [Favicon](https://favicon.io/) to get all the versions supported by the different browsers.

## Functionality

The site incorporates (at this point) four calculations to assist knitters in various aspects of their projects:

1.  **Stitches and Rows per Centimeter**: This calculation determines, based on the user's swatch, how many stitches and rows their knitting gauge is per centimeter, providing a tool for recalculating to match projects with a different gauge.
   ![image](https://github.com/CharlottaG/knit-calculators/assets/138576943/c687a5c8-def5-4d0a-b87e-8762ed181082)

    
3.  **Stitches to Cast-On and Rows to Knit**: This feature guides the yser in deciding how many stitches to cast on and the number of rows to knit to achieve a project's dimensions accurately.
    ![image](https://github.com/CharlottaG/knit-calculators/assets/138576943/83c8bc25-3088-4383-b6cd-31be21c27fbc)

4.  **Skeins Needed**: For efficient yarn management, this calculation helps you estimate the number of skeins or balls of yarn required to complete a specific knitting project.
    ![image](https://github.com/CharlottaG/knit-calculators/assets/138576943/4e989ec6-a479-475b-b626-86dddece23c6)

5.  **Evenly Increasing or Decreasing**: This tool is valuable for evenly distributing increases or decreases in your knitting, ensuring a polished final result with balanced shaping.
    ![image](https://github.com/CharlottaG/knit-calculators/assets/138576943/7f7fbd2f-684d-4e13-b8ae-33fb77569348)

## Future development
Building on the user stories, there are additional calculations that can be incorporated to further enhance this website's as the ultimate resource for knitting calculations. These potential additions include:

1.  **Imperial conversion** - Conversions from the metric system to the imperial system (e.g., converting centimeters to inches).
2.  **Yarn substitution (same gauge)** - offering a tool to match yarns with the same gauge.
3.  **Yarn substitution (different weight)** - calculating the consequences of selecting a different type of yarn with varying weight.
4.  **Size conversion** - simplifying the process of adjusting a project's size to align with user-specific requirements.

## Bug fixes
**The cast-on calculation showed NaN as the result**: The issue was that the function called the *value* of the above calculated answer which was fixed by calling the *textContent* instead, within the html span element.
![image](https://github.com/CharlottaG/knit-calculators/assets/138576943/d82cfb74-0276-4013-b1eb-482bccbd022d)

**The results showed all decimals, where only one is needed**: This was solved by using the *toFixed(1)* at the end of the calculation.
![image](https://github.com/CharlottaG/knit-calculators/assets/138576943/c5556111-a7ed-4376-a3be-b9e0de752821)

**Event handler dependent on device**: The way the modals was set-up with a span element to close the window was not device independent and could not be reached using tab key, so this was changed to buttons instead to allow for tab key to be used.


## Technologies
**Wireframes**
- UXPin

**HTML, CSS and Javascript**
- GitHub for storing repository
- Codeanywhere for code editing

**Imagery**
- Photoshop to resize and convert image to webP files.

**Content**
- [Font Awesome](https://fontawesome.com/start): to generate icons used on the page.
- [Favicon generator](https://favicon.io/): to generate the fav icon on the tab next to the title.
- [Google Fonts](https://fonts.google.com/): to find the fonts used on the page and to get the code to embed on the page.


## Accessibility

To ensure optimal accessibility for all users, regardless of their internet connection speed or potential disabilities, the following enhancements have been thoughtfully integrated into the web page's code and design:

**Structural Elements**: The utilization of semantic HTML elements, such as *header*, *main*, *footer*, and *section*, has been incorporated to effectively organize content and elevate the overall accessibility of the page.

**User-Friendly Buttons**: The size and text of buttons have been carefully designed to ensure ease of use, especially for individuals with touch screens and smaller devices.

**Enhanced Input Fields**: Labels have been employed to facilitate screen reading and making it easier for an assistive technology user to understand what data should be entered, making the site fully accessible to users with visual impairments. Additionally, the input field sizes have been enlarged to accommodate users with smaller screens.

**Optimized Images**: To boost site performance, the background image have been converted to the WebP format. This format offers superior compression without compromising image quality, resulting in a faster and more efficient user experience.

**Aria labels**: To enhance web accessibility aria labels have been used on social media links to provide additional information, context, and clarity to screen reader users. 

## Deployment

The Knit Calculators site was deployed to [GitHub](https://github.com) pages, following these steps:

1. Go to the [knit-calculators-repository](https://github.com/CharlottaG/knit-calculators)
2. Go to the *Settings* tab (top left in the menu)
3. Go to the left-hand section,under *Code and automation* click **Pages**.
4. Go to *Source* under *Build and deployment* and use the dropdown menu to choose **Deploy from a branch**
5. Under *Branch* use the dropdown menu to select **main** and set the *folder* to **root**.

The live site can be viewed at: [https://charlottag.github.io/knit-calculators](https://charlottag.github.io/knit-calculators)

## Testing
Testing was performed on:
**Devices**
- Laptop
- Iphone13
- Ipad10

**Browsers**
- Chrome
- Edge
- Firefox
- Safari
- 
| Feature        | Expected Outcome | Chrome | Edge | Firefox | Safari |
---------------  | ---------------- | ------ | ---- | ------- | ------ |
| **Learn more buttons (tips)** |   
| Gauge	| Open modal for gauge | Pass | Pass | Pass | Pass|
| Cast-on	|  Open modal for cast-on| Pass | Pass | Pass | Pass|
| Yarn | Open modal for yarn| Pass | Pass | Pass | Pass|
| Increases/Decreases |  Open modal for increases/decreases| Pass | Pass | Pass | Pass|
| **x inside opened modal** |   
| Gauge	| Close modal for gauge | Pass | Pass | Pass | Pass|
| Cast-on	|  Close modal for cast-on| Pass | Pass | Pass | Pass|
| Yarn | Close  modal for yarn| Pass | Pass | Pass | Pass|
| Increases/Decreases |  Close modal for increases/decreases| Pass | Pass | Pass | Pass|
| **Stitches/rows per cm calculation** |   
| Button click | Return an alert if no input in input field, else calculate and return answers| Pass | Pass | Pass | Pass|
| **Stitches/rows to cast-on calculation** |   
| Button click | Return an alert if previous calculation in not performed else return alert if no input in input field, else calculate and return answers| Pass | Pass | Pass | Pass|
| **# of skeins calculation** |   
| Button click | Return an alert if previous calculation in not performed else return alert if no input in input field, else calculate and return answers| Pass | Pass | Pass | Pass|
| **Increase/Decrease calculation** |   
| Button click | Return an alert if no input in input field, else calculate and return answers| Pass | Pass | Pass | Pass|
| **Footer links** |   
| Instagram| Take the user to instagram.com in new window| Pass | Pass | Pass | Pass|
| Ravelry | Take the user to ravelry.com in new window| Pass | Pass | Pass | Pass|
| Pinterest | Take the user to pinterest.com in new window | Pass | Pass | Pass | Pass|
| Email| Open users e-mail client in new window with pre-entered email address | Pass | Pass | Pass | Pass|

### Validation

**HTML**
![image](https://github.com/CharlottaG/knit-calculators/assets/138576943/ecea1d9c-3d0b-4dbb-a480-aad4cc78334e)

**CSS**
![image](https://github.com/CharlottaG/knit-calculators/assets/138576943/0a5c531f-242f-4645-9c22-087edb4b3230)

**Javascript**
*Note!* The unused varialbles, are used in the html to close the modal windows.
![image](https://github.com/CharlottaG/knit-calculators/assets/138576943/d296f24b-7923-4c17-bb42-c83e4d478973)

![image](https://github.com/CharlottaG/knit-calculators/assets/138576943/cd2c7e5f-414e-4cda-863f-dd9430cd71cb)

[Link](https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fcharlottag.github.io%2Fknit-calculators%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext)

![image](https://github.com/CharlottaG/knit-calculators/assets/138576943/eef5a3d0-48d8-45d1-a937-662dc3cca444)

[Link](https://wave.webaim.org/report#/https://charlottag.github.io/knit-calculators/)

## Credits

### Acknowledgements
I would like to extend my sincere appreciation to *Luke Buchanan, my mentor at Code Institute* , for his support and invaluable guidance and constructive feedback throughout the development of this project. 

### Resources
**Get one decimal** : [https://linuxhint.com/round-to-1-decimal-place-in-javascript/](https://linuxhint.com/round-to-1-decimal-place-in-javascript/)

**Create modals** : [https://www.w3schools.com/howto/howto_css_modals.asp](https://www.w3schools.com/howto/howto_css_modals.asp)

**Switch function** : [https://www.w3schools.com/js/js_switch.asp](https://www.w3schools.com/js/js_switch.asp)

**Validate empty input field** : [https://www.w3schools.com/howto/howto_js_validation_empty_input.asp](https://www.w3schools.com/howto/howto_js_validation_empty_input.asp)

**String to number** : [https://www.w3schools.com/jsref/jsref_parseint.asp](https://www.w3schools.com/jsref/jsref_parseint.asp)

### Content
The web site copy is my own, but I used *Google* to find information and *OpenAi* to help out with phrasings to make the copy more vivid and exiting.

### Media
[Vector Stock](https://www.vectorstock.com/royalty-free-vector/yarn-ball-icon-vector-17150800) was used to find a fav-icon for the tab.

[Favicon](https://favicon.io/) was used to generate the different files supported by different browsers.

[Unsplash](https://unsplash.com/photos/three-yarns-on-table-G-AQWUTgMZo) was used to find the background image, and Photoshop was used to convert it to webp files. Credit: Tara Evans.

[Colormind](https://webaim.org/resources/contrastchecker/) was used to check for constrasting colors.

[EOF]


