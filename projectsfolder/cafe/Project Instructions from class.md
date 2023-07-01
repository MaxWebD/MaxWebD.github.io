# WEB-233 Final Project - Website

___

Your final project is to create a simplified website and present this in a short recorded video presentation.  The intent of this site is to show off your creativity and specifically your Javascript and jQuery skills.  Pick a range of products or services that can be purchased on the web and create a website around this.  Be sure that you can find images on sites like pexel or unsplash that do not require attribution when using or snap some images with your phone for use on your site.  If you borrow any design or css styles from an existing website or start with a free website template, you must indicate your source and credit them in final presentation.  

### WebSite Requirements

___

1. A site logo should be visible on every page listed below along with menu links to access all pages except the Order Confirmation page listed below.
&NewLine;
&NewLine;

2. The Home page must include:
    - A page title
    - A jQuery Plugin for a carousel.  You can use something like the Splide jQuery plugin (<https://splidejs.com/Links>) to focus on a single product (one at a time) or a scrolling set of images.  This will be the focal point of the home page.
    - Other elements like text blocks and/or images, etc., to effectively create a home page of suitable length to fill the browser.  If you are not feeling creative to write text that works with your page, you can use a Lorem Ipsum text generator to fill in page content for your design.  See <https://www.lipsum.com/>.
&NewLine;
&NewLine;

3. The Products or Services Pages should include:
    - A page title.
    - Images of the product or services that can be purchased (free images which do not need attribution) along with a short desc, qty, price, and a means of adding the item to the cart.  This means should be intuitive and not difficult to understand how to get the item in the cart.
    - At minimum, your site should display 10 products or services.
    - The ability to get a much closer view of the product or service through a larger image using the jQuery Lightbox plugin.
    - Items/Services selected for purchase should be stored in web storage (Chapter 14).
&NewLine;
&NewLine;

4. The View Shopping Cart page should:
    - Include Page Header.
    - Read information from web storage (Chapter 14) to redisplay items that are currently in the user's cart with appropriate qty, price and extended price (qty * price).
    - Display a total of all items in the cart.
    - Provide the ability to change the quantity or remove an item from the cart.
    - Have some option to handle and signify an empty card situation.
    - Update the web storage as needed based on changes that were made to cart.
    - Include a jQuery UI Widget button to submit the order.  When order is submitted, display the order confirmation page via an HTTP Get method.
&NewLine;
&NewLine;

5. Processing for the "Order Confirmation" should include:
    - A page title.
    - Writing the order contents from web storage to the browser along with suitable text indicating that the order has been placed.
    - Clear out the web storage, so that it no longer contains the order information.
&NewLine;
&NewLine;

6. "Contact Us" page should include:
    - A page title.
    - jQuery UI Widgets for the Name, Email, Address, State, Zip Code, Subject and Message, .  Assume that this website is for our local area and only display Illinois and Wisconsin in the pick list.
    - Each of the fields indicated above are required entries.  Use simple jQuery validations to verify that something has been added to each field.  Use a regular expression to validate the zip code entry.
    - Validation errors should be displayed in a jQuery UI Dialog.
    - Upon successful validation, just return a dialog saying something about the contact information has been recorded or something to that effect.  There is no need to add an extra page to indicate this unless you prefer to implement it with a separate page.
    - Extra Credit opportunity (5pt), incorporate a map - you can pick some random address to use for the site's place of business.  Potential free map resources (as well as paid) can be found here: <https://flatlogic.com/blog/top-mapping-and-maps-api/>.
    NOTE: Extra credit will only be awarded if a website is complete and the map has been successfully integrated.
&NewLine;
&NewLine;

7. "About Us" page must include:
    - A page title.
    - Image and Textual elements (can use Lorem Ipsum if necessary - see URL above).

### Presentation Requirements

___

A short video demonstrating your working web application and covering a few items in a PowerPoint presentation.  The PowerPoint presentation should include the URL to the video, indicate areas where you encountered problems, how you overcame any issues, and any attribution for site ideas or css that you may have used in creating your presentation.  

Many options are available for creating the presentation video.  If you do not have a specific software solution in mind, you can consider https://screencast-o-matic.com/.

### Submission Requirements

What to add to your Final Project GitHub Repo:

- Your working code in the "src" directory.
- Your PowerPoint presentation (which includes a hyperlink to your video presentation!!!) which is used in the video should be saved as a pdf file and saved in the "project" directory
- Your project activity log in the "project" directory.

### Commit Changes to Remote GitHub Repository

___

1. Post your lab work to the remote GitHub repository after reviewing the Assignment Rubric in Eagle.  Follow the instructions for committing changes in the **_Getting Started With GitHub_** documentation posted in the **_Reference Document_** in the "Welcome to the Course" module in RVC Eagle.
