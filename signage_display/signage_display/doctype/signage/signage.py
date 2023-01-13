# Copyright (c) 2023, Anjaleeps and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Signage(Document):
	pass

@frappe.whitelist()
def get_all_signages():
	signages = frappe.db.get_list("Signage", 
		filters={
			"published": "1"
		},
		fields=["title", "description", "display_image"]
	)

	return signages