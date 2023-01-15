# Copyright (c) 2023, Anjaleeps and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class SignageSettings(Document):
	pass

@frappe.whitelist(allow_guest=True)
def get_signage_settings():
	settings = frappe.get_doc("Signage Settings")
	response = {
		"display_duration": settings.display_duration,
		"display_name": settings.display_name,
		"column_count": settings.column_count,
		"row_count": settings.row_count}
	return response