import frappe

def get_context(context): 
    context.signage_settings = frappe.get_doc("Signage Settings")
    context.signages = frappe.db.get_list("Signage", 
        filters={
            "published": "1"
        },
        fields=["title", "description", "display_image", "show_title"]
    )
    context.signage_height = 80 // context.signage_settings.row_count
    return context