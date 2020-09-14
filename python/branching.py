import sys
the_input = int(sys.argv[1]) + int(sys.argv[2])

if the_input <= 0:
    print(f'You have chosen the path of destitution.')

elif the_input >= 1 and the_input <= 100:
    print(f'You have chosen the path of plenty.')

else: 
    print(f'You have chosen the path of excess.')