# Sidebar Config

`sidebar-config.json` in `src/` will be used to create sidebar content.

### Sample : 

    [  
      {  
        "name": "Dashboard",  
      "url": "e/dashboard",  
      "icon": "SettingsIcon"  
      },   
      {  
        "name": "Locations",  
      "url": "locations",  
      "icon": "SettingsIcon"  
      },  
      {  
        "name": "Posts",  
      "url": "posts",  
      "icon": "SettingsIcon"  
      }  
    ]

Here we have 3 modules, namely Posts, Locations and, Dashboard
each of these represents a list item in the sidebar where, 
 - "name" is the lable which will be displayed in the sidebar. 
 - "url" is the path used for routing. 
 - "icon" is the icon identifier as **string**

## Nested Routes
You can provide "children" to each sidebar item for nested routes.

### Sample
    [
    	{  
           "name": "Dashboard",  
          "url": "e/dashboard",  
          "icon": "SettingsIcon" ,
          "children": [
    		      {
    		         "name": "Analytics Dashboards",  
    			      "url": "e/dashboard/analytics"
    		      }
    	      ]
          },
          ...
     ]
Here you can procide following properties: 
 - "name" is the lable which will be displayed in the sidebar. 
 - "url" is the path used for routing.
