        # CLASS INTRODUCTION

# Class:
"""
A class is a way of organizing and producing objects that all have similar attributes and methods.
We can use classes to create new objects, which we say are instances of those classes.
"""

# Class Name:
"""
By convention, user-defined Python class names start with a CAPITAL LETTER
"""

# __init__() 
"""
This function is required for classes, and it’s used to INITIALIZE the objects it creates. 
It always takes at least one argument, « self », that refers to the object being created.
"""

# « self » parameter: 
"""
It should be always the first parameter as Python will use the first parameter that __init__() receives to refer to the object being created;
His name is just a convention.s
"""

# Other Parameters (attributes): 
"""
They are the attributes of the object (instance) created
The first parameter when we create a new instance correspond to the second one in __init__() function's  parameters, because the first one is the « self »
"""

# Member Variable:
"""
Store information that belongs to the class object.
It's exactly like creating any other variable.
"""

# Create a new Class
class Class_name(object):
  
  # Set member variable:
  var_1 = True
  var_2 = "good"
  
  # Set attributes:
  def __init__(self, param_1, param_2, param_3):
      self.param_1 = param_1
      self.param_2 = param_2
      self.param_3 = param_3
  
  # Set methods:
  def method_name(self):
    print self.param_1
    print "I'm a %s with %s and I can %s." % (self.param_1, self.param_2, self.param_3)


# Create a new object (class instance)
object_name = class_name(param1, param2, param3)

# Call attributes:
attribute_1 = object_name.param_1
print attribute_1
print object_name.param_2

# Call methods:
method_name()

# Call member variable:
var1 = object_name.var_1

# « super » keyword
super(Child_Class, self).method_name(parameters to copy)
    self.other_param_to_add = other_param_to_add