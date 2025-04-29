function I = simpson(x, y)
    n = length(x);
    if mod(n-1,2) ~= 0
        error('Simpson requiere un número par de intervalos');
    end
    h = (x(end) - x(1)) / (n - 1);
    I = y(1) + y(end);
    I = I + 4*sum(y(2:2:end-1));
    I = I + 2*sum(y(3:2:end-2));
    I = I * h / 3;
end