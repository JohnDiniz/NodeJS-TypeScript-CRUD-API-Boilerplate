#!/bin/bash

# Check if at least one directory name is provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 <directory_name1> [<directory_name2> ...]"
    exit 1
fi

# Initialize an empty variable to store file contents
files_to_clipboard=""

# Loop through provided directory names
for directory_name in "$@"; do
    # Define file paths
    controller_file="src/controllers/${directory_name}Controller.ts"
    services_file="src/services/${directory_name}Service.ts"
    repository_file="src/repositories/${directory_name}Repository.ts"

    # Check if the files exist
    if [ ! -e "$controller_file" ] || [ ! -e "$services_file" ] || [ ! -e "$repository_file" ]; then
        echo "Error: One or more files for '$directory_name' do not exist."
        exit 1
    fi

    # Read the content of each file and concatenate to the variable
    files_to_clipboard+="$controller_file:\n$(bat "$controller_file")\n"
    files_to_clipboard+=" $services_file:\n$(bat "$services_file")\n"
    files_to_clipboard+="$repository_file:\n$(bat "$repository_file")\n"
done

# Copy the concatenated file contents to the clipboard
echo -n "$files_to_clipboard" | pbcopy

echo "File contents added to clipboard:"
echo -e "$files_to_clipboard"




