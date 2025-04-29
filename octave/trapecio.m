function I = trapecio(x, y)
    n = length(x);
    h = (x(end) - x(1)) / (n - 1);
    I = (h/2) * (y(1) + 2*sum(y(2:end-1)) + y(end));
end