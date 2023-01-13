from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in signage_display/__init__.py
from signage_display import __version__ as version

setup(
	name="signage_display",
	version=version,
	description="Display Signages Boards",
	author="Anjaleeps",
	author_email="anjaleeps97@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
