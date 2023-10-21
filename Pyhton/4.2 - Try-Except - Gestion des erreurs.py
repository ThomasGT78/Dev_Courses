#	    TRY / EXCEPT -> Gestion des Erreurs
    
"https://docs.python.org/fr/3/tutorial/errors.html"

numerator = input("Enter the numerator :")
denominator = input("Enter the denominator :")

try:
	result = int(numerator) / int(denominator)
	print(result)
except ZeroDivisionError:
	print("Error: You can't divide by zero.")
except ValueError:
	print("Error: The type value is incorrect, it must be a number.")
except :
	print("Error: It can be anything.")

''' 
The code to test is inside the « try » 

The « except » argument is the one appearing in the terminal when it's detected

'''