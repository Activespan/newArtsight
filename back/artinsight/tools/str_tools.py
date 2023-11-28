#
import string
import random

#
alphabet62 = string.digits + string.ascii_letters


#
def random_str(length, digit=False):
    if digit:
        return "".join(random.choice(string.digits) for _ in range(length))
    return "".join(random.choice(alphabet62) for _ in range(length))


#
def generate_random_numbers():
    return str(random.randint(10**31, 10**32 - 1))[:16]
