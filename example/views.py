from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.


def example(request):
    return render(request, 'example/index.html')


def example_backend(request):
    start = int(request.GET.get('start', 0))
    length = int(request.GET.get('length', 0))
    draw = int(request.GET.get('draw', 1))
    print('get paging param start: {start}'.format(start=start))
    print('get paging param length: {length}'.format(length=length))
    m = [
        [
            "Airi",
            "Satou",
            "Accountant",
            "Tokyo",
            "28th Nov 08",
            "$162,700"
        ],
        [
            "Angelica",
            "Ramos",
            "Chief Executive Officer (CEO)",
            "London",
            "9th Oct 09",
            "$1,200,000"
        ],
        [
            "Ashton",
            "Cox",
            "Junior Technical Author",
            "San Francisco",
            "12th Jan 09",
            "$86,000"
        ],
        [
            "Bradley",
            "Greer",
            "Software Engineer",
            "London",
            "13th Oct 12",
            "$132,000"
        ],
        [
            "Brenden",
            "Wagner",
            "Software Engineer",
            "San Francisco",
            "7th Jun 11",
            "$206,850"
        ],
        [
            "Brielle",
            "Williamson",
            "Integration Specialist",
            "New York",
            "2nd Dec 12",
            "$372,000"
        ],
        [
            "Bruno",
            "Nash",
            "Software Engineer",
            "London",
            "3rd May 11",
            "$163,500"
        ],
        [
            "Caesar",
            "Vance",
            "Pre-Sales Support",
            "New York",
            "12th Dec 11",
            "$106,450"
        ],
        [
            "Cara",
            "Stevens",
            "Sales Assistant",
            "New York",
            "6th Dec 11",
            "$145,600"
        ],
        [
            "Cedric",
            "Kelly",
            "Senior Javascript Developer",
            "Edinburgh",
            "29th Mar 12",
            "$433,060"
        ]
    ]
    data = m[start: start+length]
    a = {
        "draw": draw,
        "recordsTotal": 10,
        "recordsFiltered": 10,
        "data": data
    }
    return JsonResponse(a)
