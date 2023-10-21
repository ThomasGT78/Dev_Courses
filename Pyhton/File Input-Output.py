        """ FILE INPUT/OUTPUT """

variableName = open("fileName", "mode")

with open("file", "mode") as variable:
  # Read or write to the file
"""
You can open files in any of the following modes:
"w"  - write-only mode
"r"  - read-only mode
"r+" - read and write mode 
"a"  - append mode, which adds any new data you write to the file to the end of the file.
"""
    
    """ Exemple 1 """  
    
my_list = [i ** 2 for i in range(1, 11)]
""" We tell Python to open « output.txt » in « w » mode. We store the result of this operation in a file object « f » """
my_file = open("output.txt", "w")

# Add your code below!
for item in my_list:
  my_file.write(str(item) + "\n")

my_file.close()


# .read()
"""
To read the entire file at once
"""
print my_file.read()

# .readline()
"""
To read from a file line by line, rather than  the entire file.
If you call .readline() on the file object, you’ll get the first line of the file; 
Subsequent calls will return successive lines.
"""
print my_file.readline()