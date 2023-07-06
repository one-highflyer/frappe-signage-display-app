## Signage Display

Signage Display is a customizable Frappe app for creating digital signage display boards. It allows you to design and display signages with the help of a Rich Text Editor and custom images with minimal set-up time. 

![signage display app example](https://user-images.githubusercontent.com/42403668/212523549-d846ce0f-428c-416f-af62-ba1847211553.gif)

It also comes with customization options for adjusting the layout and speed of the presented slideshow according to individual requirements. 

<p float="left">
 <kbd>
   <img src="https://user-images.githubusercontent.com/42403668/212525397-faec0c7a-12c8-48ce-983a-0cbeb8f6e2c1.png" alt="signage display board with 2 columns and 1 row" width=400/>
  </kbd>
 <kbd>
    <img src="https://user-images.githubusercontent.com/42403668/212525423-e4638248-09a2-476a-9edc-ed9b96aeb027.png" alt="signage display board with 2 columns and 2 rows" width=400/>
  </kbd>
</p>

### Installation

##### Install on Frappe Cloud

1. Go to [Frappe Cloud Dashboard- Sites](https://frappecloud.com/dashboard/sites) and create a new site. 
2. Select "Select apps to install" and choose "Signage Display"
3. Complete the site setup with the help of the new site wizard. 

##### Install Locally
1. [Set up Frappe Bench](https://frappeframework.com/docs/v14/user/en/installation)
2. Go to the created 'frappe-bench' directory.
3. Run these commands to set up a new site and install Signage Display

```
bench new-site signage.localhost
bench get-app signage_display https://github.com/one-highflyer/frappe-signage-display-app
bench --site signage.localhost install-app signage_display
bench start
```

4. Complete the site initialization by visiting the site URL.

### Usage 

##### Creating and viewing signages 

1. Search for 'Signage List' of corresponding to the 'Signage' doctype on your site
2. Choose 'Add Signage' option.
3. Design the new signage by providing a appropriate title (mandatory), description, and display image. 

![New Signage page](https://user-images.githubusercontent.com/42403668/212526452-294b9430-80e8-4fc9-873e-b713211631df.png)

4. Check the 'published' box to signal if the new signage should be diplayed on the signage display board. 
5. Save the signage. 
6. Go to <site-url>/display to view the signage slideshow shown on the display board. 

##### Customizing the display board

Signage Display provides several customization options to help you determine the final look of the display board. This includes:
* Display Name 
* Individual Signage Display Duration (default - 20000 ms)
* Display Row Count : How many signages should the display board show in a column at a given time (default - 1)
* Display Column Count: How many signages should the display board show in a row at a given time (default - 1)

![Signage Settings page](https://user-images.githubusercontent.com/42403668/212526507-e18a71be-5fd4-4941-b60f-2ff28009901f.png)

### License

MIT
