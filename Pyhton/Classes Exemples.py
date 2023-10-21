        # CLASS EXEMPLES

        """Exemple 1:"""
        
""" Without Attributes """
class Square(object):
  def __init__(self):
    self.sides = 4
 
my_shape = Square()
print my_shape.sides


        """Exemple 2:"""
        
class Fruit(object):
  """A class that makes various tasty fruits."""
  def __init__(self, name, color, flavor, poisonous):
    self.name = name
    self.color = color
    self.flavor = flavor
    self.poisonous = poisonous

  def description(self):
    print "I'm a %s %s and I taste %s." % (self.color, self.name, self.flavor)

  def is_edible(self):
    if not self.poisonous:
      print "Yep! I'm edible."
    else:
      print "Don't eat me! I am super poisonous."

"""We set the data of the fruit class to be a lemon"""
lemon = Fruit("lemon", "yellow", "sour", False)

"""We call the methods (function) of the lemon object (instance)"""
lemon.description()
# I'm a yellow lemon and I taste sour.

lemon.is_edible()
# Yep! I'm edible.


        """Exemple 3:"""

  """Makes cute animals"""
class Animal(object):
  """member variable"""
  is_alive = True
  health = "good"
  
  """Init function to set attributes"""
  def __init__(self, name, age):
    self.name = name
    self.age = age
  
  """method (or function) of the class"""
  def description(self):
    print self.name
    print self.age

hippo = Animal("Bob", 3)
sloth = Animal("Nick", 2)
ocelot = Animal("Tom", 4)

hippo.description()
print hippo.health


        """Exemple 4:"""

class ShoppingCart(object):
  """Creates shopping cart objects
  for users of our fine website."""
  
  def __init__(self, customer_name):
    self.customer_name = customer_name
    self.items_in_cart = {}
  def add_item(self, product, price):
    """Add product to the cart."""
    if not product in self.items_in_cart:
      self.items_in_cart[product] = price
      print product + " added."
    else:
      print product + " is already in the cart."

  def remove_item(self, product):
    """Remove product from the cart."""
    if product in self.items_in_cart:
      del self.items_in_cart[product]
      print product + " removed."
    else:
      print product + " is not in the cart."


my_cart.add_item("computer", 1590)
print my_cart.items_in_cart