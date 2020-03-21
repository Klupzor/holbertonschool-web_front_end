0x0A. Bootstrap
===============

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/81ad5d3e90751bb185d9.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUZGDONYM4%2F20200321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200321T000033Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=fb35c805a2f66f2c939397c2399cc0e694de4893359ef5bd8935659c06f0ae52)

Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains **CSS** and **JavaScript** design templates for *typography, forms, buttons, navigation, and other interface components.*

For this project, you will use Bootstrap 4.4 and only the CSS styling part.

Tasks
-----

#### 0\. Reboot styling

Add Bootstrap to reset the CSS styling.

Your final page must look like this:

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/0b67c90b07246a25d1f8.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUZGDONYM4%2F20200321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200321T000033Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=513d28ea406bb7c35bf22a5580ae943b967b6c030cc66930dc47f45ab6c32c1a)

#### 1\. Blocks

Build this responsive web page:

![](https://intranet-projects-files.s3.amazonaws.com/holbertonschool-webstack/623/1-index.gif)

**Requirements:**

-   You are not allow to define any styling in a CSS file, in head or inline - only Bootstrap classes
-   You can not change the HTML structure - only adding classes is allowed

**Behaviors/styles:**

For all cells of all rows:

-   Padding at `.5rem`
-   Background color of the name of the cell
-   Text centered and white

**First line:**

-   Each cell has the same width
-   Screen >= 992px: display like 4 columns
-   Screen < 992px: display like 4 lines

**Second line:**

-   Each cell has the same width
-   Screen >= 576px: display like 4 columns
-   Screen < 576px: display like 4 lines

**Third line:**

-   The last cell is taking 50% of the width screen
-   The middle cell has 2 times the size of the first cell
-   Screen >= 992px: display like 3 columns
-   Screen < 992px: display like 3 lines

**Fourth line:**

-   Different order (from left to right) based on the size
-   Screen >= 1200px: Primary -> Success -> Danger -> Warning
-   Screen between 992px and 1200px: Warning -> Primary -> Success -> Danger
-   Screen between 768px and 992px: Danger -> Warning -> Primary -> Success
-   Screen <= 768px: Success -> Danger -> Warning -> Primary

**Fifth line:**

-   Each cell has the same width (~16% of the screen)
-   Screen >= 768px: display like 2 columns on each side of the screen
-   Screen < 768px: display like 2 lines

**Last line:**

-   Each cell has the same width (~16% of the screen)
-   Screen >= 768px: display like 3 columns with the space between the first and middle cell 2 times bigger than the space between the middle cell and the last cell
-   Screen < 768px: display like 3 lines

#### 2\. Table of chemical elements

Build this responsive web page:

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/21d4b4b1fe964a1918f2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUZGDONYM4%2F20200321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200321T000033Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=ad23fe9adfd2545f9157711d3c78c7d409a2c04801a154aa298093863b9d9dcb)

![](https://intranet-projects-files.s3.amazonaws.com/holbertonschool-webstack/623/2-index.gif)

**Requirements:**

-   You are not allow to define any styling in a CSS file, in head or inline - only Bootstrap classes
-   You can not change the HTML structure - only adding classes is allowed

**Behaviors/styles:**

-   Header:
    -   With border bottom
    -   Padding `.5rem` and margin `1rem`
    -   Background color "light"
    -   Horizontal listing, no margin bottom:
        -   First item aligned on the left with a border rounded image
        -   2 other items aligned on the right with 2 links (aligned vertically in the middle) with a layout of a button of style "secondary"
        -   The link "Chemical elements" is active
-   The `main` block has full width, spanning the entire width of the viewport
-   The first `section`:
    -   The div inside is an alert of style "info":
        -   `h4` is the header of this alert
        -   The last paragraph (containing the link) should not have any margin bottom
-   The second `section`:
    -   `h1` has a margin bottom at `1.5rem` and margin top at `3rem`
    -   Inside the `h1`, "only 5" has a badge layout of type "info"
    -   The `div` is able to make the `table` responsive with a break at `992px`
    -   The `table` has "dark" style and hover on rows

#### 3\. Cards

Build this responsive web page:

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/6e564c36491cda7c0540.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUZGDONYM4%2F20200321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200321T000033Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=e2e1ab54578615c307a173a65841d56b2c515d3f4ee62b9b7e0a8933609cb9ee)

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/272ce037250ea75212d5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUZGDONYM4%2F20200321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200321T000033Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=d88a4c73b64d2f8c719b7de1f97fe6451e38309833acc0d016e56e8f25fedf7a)

![](https://intranet-projects-files.s3.amazonaws.com/holbertonschool-webstack/623/3-index.gif)

**Requirements:**

-   You are not allow to define any styling in a CSS file, in head or inline - only Bootstrap classes
-   You can not change the HTML structure - only adding classes is allowed

**Behaviors/styles:**

-   The first `div` is a container with a break at `992px` and padding of `3rem`
    -   Inside, card is in row until `576px` where it will switch to column
    -   Each card has a spacing of `1.5rem` on top
    -   The text "Coding" is a card header
    -   Language name (card title) and description (card text) are inside a card body
    -   Duration in hour is a card footer
    -   Also, the button "Play with" has the "danger" layout and should open a modal
-   The second `div` is the modal:
    -   Centered vertically and horizontally
    -   The `form` has a border on top and a padding on top of `1rem`:
        -   Each items of the `form` are grouped
        -   The final rendering of the form must be the same as the screen (label on the left, color style, etc..)

#### 4\. Bob Dylan

Build this responsive web page:

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/335e2b7e5816adec9ab2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUZGDONYM4%2F20200321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200321T000033Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=5878c163c0913d62283f2bd14c625a816c6cef517601776b343d21b71db29085)

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/1e3580392c08f3040dcb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUZGDONYM4%2F20200321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200321T000033Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=a59e332f74555a5a37000e8db9e50ccf7680e0457d714145e10eb1821a44937d)

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/8a56729197879f6ad637.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUZGDONYM4%2F20200321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200321T000033Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=eee49b3297d9c178738e90244c19c63617ee13938d0bfc87d050703daa570f8c)

![](https://intranet-projects-files.s3.amazonaws.com/holbertonschool-webstack/623/4-index.gif)

**Requirements:**

-   You are not allow to define any styling in a CSS file, in head or inline - only Bootstrap classes
-   You can not change the HTML structure - only adding classes is allowed

**Behaviors/styles:**

-   Body background is dark
-   All elements are inside a `div` container with a break at `960px`, background color light and a padding of `1rem`
-   `h1` has a margin bottom and top of `1.5rem`
-   `ul` is a tabs navigation with the first item active by default
-   The `div` after the `ul` is the container of tabs content with a background of color white and padding of `1rem`
-   The switch between tab contents is animated with a fade
-   In the tab "Discography":
    -   The list of discs has a grouped layout
    -   Each disc name has a link that extends or collapses description

#### 5\. Show/Hide - screen size

Build this responsive web page:

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/1125166bbbfdf836f33d.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUZGDONYM4%2F20200321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200321T000033Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=cf2be1ab63f7d963b5c80cab327c380efd49f6208abf0a2ff7a6f60f107ad27f)

**Requirements:**

-   You are not allow to define any styling in a CSS file, in `head` or inline - only Bootstrap classes
-   You can not change the HTML structure - only adding classes is allowed

**Behaviors/styles:**

-   `Big title` is displayed only for width screen > 768px
-   `Small title` is displayed only for width screen <= 768px
-   first `div` should:
    -   be centered as container and take the full width when the width of the screen <= 768px
    -   have "info color" background
    -   have some padding on the 4 directions
    -   have borders of the "info color" and rounded
-   "Left div" should:
    -   be aligned on the left
    -   have light text color
    -   have light border on the bottom and right
    -   have some padding on the 4 directions
-   "Middle div" should:
    -   be aligned in the center
    -   have light text color
    -   have light border on the bottom, left and right
    -   have some padding on the 4 directions
    -   have shadow
    -   disappear when the width of the screen <= 768px
-   "Right div" should:
    -   be aligned on the right
    -   have light text color
    -   have light border on the bottom and left
    -   have some padding on the 4 directions

#### 6\. Overwrite CSS

Create the custom stylesheet `6-styles.css` to match this layout.

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/cfec56b8c859081abbd8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUZGDONYM4%2F20200321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200321T000033Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=3fd7dcc250901a611f4557b31f5862efd6d40dacebdcb7be865937499fd05145)

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/d902ca67b96983d8792b.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUZGDONYM4%2F20200321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200321T000033Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=3e5b07b31a1f552c021144d835e234ac9f4c69ba7597f83db4c133e16b8dc87b)

![](https://intranet-projects-files.s3.amazonaws.com/holbertonschool-webstack/623/6-index.gif)

**Requirements:**

-   You are not allow to define any styling in the head or inline of the HTML
-   You can not change the HTML

**New styles:**

-   `btn-primary` has as background color set to `#E0003C` and `#BC1340` for hover/focus/active
-   `btn-outline-primary` has text and border color set to `#E0003C`
-   `a` link (no matter which color forced) has text color set to `#E0003C` normally, in hover and in focus
-   Card (card container, but also header/footer) has border color set to `#E0003C` and radius to `1rem`
-   `.text-muted` has text color set to `#8C8C8C`