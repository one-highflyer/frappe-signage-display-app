# Copyright (c) 2023, Anjaleeps and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Signage(Document):
	def on_update(self):
		if self.published:
			signages = get_all_signages()
			frappe.publish_realtime("signage_update", {"signages": signages}, user="Guest")
			# frappe.publish_realtime("signage_update", {"signages": signages}, user="System")

	def after_delete(self):
		if self.published:
			signages = get_all_signages()
			frappe.publish_realtime("signage_update", {"signages": signages}, user="Guest")
			# frappe.publish_realtime("signage_update", {"signages": signages}, user="System")

@frappe.whitelist(allow_guest=True)
def get_all_signages():
	signages = frappe.db.get_list("Signage", 
		filters={
			"published": "1"
		},
		fields=["title", "description", "display_image", "show_title"]
	)

	return signages